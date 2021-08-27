export interface ItemProps {
  item: FormItemProps;
}

export interface FormItemProps {
  userName: string;
  genderCheck: string | boolean;
  birthDate: string;
  userGoal: string | undefined;
  agreeCheck: boolean;
}

export interface FormProps {
  setFormValues: React.Dispatch<React.SetStateAction<FormItemProps[]>>;
}
