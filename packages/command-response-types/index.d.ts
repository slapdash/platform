export interface ActionOpenURL {
  type: "open-url";
  url: string;
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

export interface MoveActionAddParam {
  type: "add-param";
  name: string;
  value: string;
}

export type MoveAction = MoveActionAddParam;

export type Action =
  | ActionOpenURL
  | ActionPaste
  | ActionCopy
  | ActionShowToast
  | MoveAction;

export type Ranking = boolean;

export type OptionMainAction =
  | Action
  | {
      action: Action;
      label?: string;
      tooltip?: string;
      icon?: string;
    };

export interface ListOption {
  title: string;
  subtitle?: string | string[];
  icon?: string;
  action: OptionMainAction;
  moveAction?: MoveAction;
  group?: string;
}

export interface GroupObject {
  id: string;
  title: string;
}

export type Group = string | GroupObject;

export interface List {
  type: "list";
  options: ListOption[];
  groups?: Group[];
  ranking?: Ranking;
}

export type MasonryOption = Pick<ListOption, "action" | "moveAction"> & {
  imageURL: string;
};

export interface Masonry {
  type: "masonry";
  options: MasonryOption[];
}

export interface BaseField {
  id: string;
  required?: boolean;
  label: string;
  defaultValue?: unknown;
}

export interface TextField extends BaseField {
  type: "text";
  placeholder?: string;
  defaultValue?: string;
  multiline?: boolean;
}
export interface ToggleField extends BaseField {
  type: "toggle";
  defaultValue?: boolean;
}

export type SelectOption = string | { label: string; value: string };

export interface SelectField extends BaseField {
  type: "select";
  options: SelectOption[];
  multiple?: boolean;
  placeholder?: string;
  defaultValue?: string | string[];
}

export interface DateField extends BaseField {
  type: "date";
  timeSelect?: boolean;
  defaultValue?: string;
}

export type FormValues = {
  [x: string]: string | number | boolean | string[];
};

export type FormField = ToggleField | TextField | SelectField | DateField;

export type FormFields = Array<FormField | FormField[]>;

export interface Form {
  type: "form";
  fields: FormFields;
  title?: string;
  submitLabel?: string;
  cancelLabel?: string;
  method?: "get" | "post";
}

export type View = List | Masonry | Form;

export interface Config {
  form: Pick<Form, "fields">;
}

export interface Token {
  paramName: string;
  label?: string;
  icon?: string;
}

export interface CommandResponse {
  action?: Action;
  view?: View;
  config?: Config;
  tokens?: Token[];
  inputPlaceholder?: string;
}
