export type NavigationAction =
  | {
      action: "id";
      id: `#${string}`;
    }
  | {
      action: "link";
      link: string;
    }
  | {
      action: "action_open";
      id: string;
    };

export type NavigationItem = NavigationAction & {
  label: string;
  name: string;
};
