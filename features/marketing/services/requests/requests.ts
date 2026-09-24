interface ApiEnvelope<T> {
  data: T;
}

export interface QuoteRequestPayload {
  requestType: "custom-quote";
  contact: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
  };
  productName?: string;
  quantity?: number;
  specs: {
    packagingStyle?: string;
    material?: string;
    dimensions: {
      length?: number;
      width?: number;
      height?: number;
      unit: "in";
    };
  };
  notes?: string;
  attachments: string[];
  consent: true;
  whatsappOptIn?: boolean;
  idempotencyKey: string;
  website?: string;
}

async function apiRequest<T>(path: string, init: RequestInit): Promise<T> {
  const headers = new Headers(init.headers);
  if (!(init.body instanceof FormData))
    headers.set("Content-Type", "application/json");
  const response = await fetch(`/api/v1${path}`, {
    ...init,
    headers,
  });
  const body: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      body && typeof body === "object" && "message" in body
        ? String((body as { message: unknown }).message)
        : "The request could not be completed.";
    throw new Error(message);
  }
  return (
    body && typeof body === "object" && "data" in body
      ? (body as ApiEnvelope<T>).data
      : body
  ) as T;
}

export function submitQuoteRequest(
  payload: QuoteRequestPayload,
  attachment?: File,
): Promise<{ id: string; status: string; quoteNumber: string }> {
  if (attachment) {
    const form = new FormData();
    form.append("payload", JSON.stringify(payload));
    form.append("attachment", attachment, attachment.name);
    return apiRequest("/requests/with-attachment", {
      method: "POST",
      body: form,
    });
  }
  return apiRequest("/requests", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
