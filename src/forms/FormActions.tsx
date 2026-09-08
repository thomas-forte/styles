import { Button, type ButtonColorScheme } from "../buttons/Button";

export type FormActionsProps = {
  onCancel: () => void;
  actionButtonColor?: ButtonColorScheme;
  isSubmitting?: boolean;
  cancelLabel?: string;
  submitLabel?: string;
};

export const FormActions = ({
  onCancel,
  actionButtonColor = "slate",
  isSubmitting = false,
  cancelLabel = "Cancel",
  submitLabel = "Save",
}: FormActionsProps) => (
  <div className="mt-4 flex items-center justify-between gap-2">
    <Button
      type="button"
      onClick={onCancel}
      disabled={isSubmitting}
    >
      {cancelLabel}
    </Button>
    <Button
      type="submit"
      color={actionButtonColor}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Submitting..." : submitLabel}
    </Button>
  </div>
);
