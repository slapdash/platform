//
// Root response object
//

export interface CommandResponse {
  action?: Action;
  view?: View;
  config?: Config;
  tokens?: Token[];
  inputPlaceholder?: string;
}

//
// Action
//

export type Action =
  | ActionOpenURL
  | ActionPaste
  | ActionCopy
  | ActionShowToast
  | ActionMove;

export interface ActionOpenURL {
  type: "open-url";
  url: string | string[];
}

export interface ActionPaste {
  type: "paste";
  value: string;
}

export interface ActionCopy {
  type: "copy";
  value: string;
}

export interface ActionShowToast {
  type: "show-toast";
  message: string;
}

export interface ActionMoveAddParam {
  type: "add-param";
  name: string;
  value: string;
}

export type ActionMove = ActionMoveAddParam;

//
// View
//

export type View = string | List | Masonry | Form;

export interface List {
  type: "list";
  options: ListOption[];
  groups?: Group[];
  ranking?: Ranking;
}

export interface ListOption {
  title: string;
  subtitle?: string | string[];
  icon?: Icon;
  action: OptionMainAction;
  moveAction?: ActionMove;
  group?: string;
}

export type OptionMainAction =
  | Action
  | {
      action: Action;
      label?: string;
      tooltip?: string;
      icon?: Icon;
    };

export type Group = string | GroupObject;

export interface GroupObject {
  id: string;
  title: string;
}

export type Ranking = boolean;

export interface Masonry {
  type: "masonry";
  options: MasonryOption[];
}

export type MasonryOption = Pick<ListOption, "action" | "moveAction"> & {
  imageURL: string;
};

export interface Form {
  type: "form";
  fields: FormFields;
  title?: string;
  submitLabel?: string;
  cancelLabel?: string;
  method?: "get" | "post";
  error?: string | null;
}

export type FormValues = {
  [x: string]: string | number | boolean | string[];
};

export type FormFields = Array<FormField | FormField[]>;

export type FormField = TextField | ToggleField | SelectField | DateField;

export interface BaseField {
  id: string;
  required?: boolean;
  label: string;
  defaultValue?: unknown | null;
  error?: string | null;
  helpText?: string | null;
}

export interface TextField extends BaseField {
  type: "text";
  placeholder?: string;
  defaultValue?: string | null;
  multiline?: boolean;
}

export interface ToggleField extends BaseField {
  type: "toggle";
  defaultValue?: boolean | null;
}

export interface SelectField extends BaseField {
  type: "select";
  options: SelectOption[];
  multiple?: boolean;
  placeholder?: string;
  defaultValue?: string | string[] | null;
}

export type SelectOption = string | { label: string; value: string };

export interface DateField extends BaseField {
  type: "date";
  timeSelect?: boolean;
  defaultValue?: string | null;
}

//
// Icon
//

export type IconPadding =
  | "slapdash-system"
  | "none"
  | "material-system"
  | "edge-to-edge";

export type Icon =
  | string
  | {
      src: string;
      padding?: IconPadding;
    }
  | {
      light: string;
      dark: string;
      padding?: IconPadding;
    }
  | {
      monochrome: string;
      padding?: IconPadding;
    };

//
// Config
//

export interface Config {
  form: Pick<Form, "fields" | "error">;
}

//
// Token
//

export interface Token {
  paramName: string;
  label?: string;
  icon?: Icon;
}
