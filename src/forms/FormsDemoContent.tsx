import { useState } from "react";

import { FormActions } from "./FormActions";
import { FormErrors } from "./FormErrors";
import { Input } from "./Input";
import { InputCheck } from "./InputCheck";
import { InputRating } from "./InputRating";
import { Select } from "./Select";

export const FormsDemoContent = () => {
  const [checkOn, setCheckOn] = useState(true);
  const [selectValue, setSelectValue] = useState("a");
  const [rating, setRating] = useState("3");

  return (
    <div className="flex max-w-md flex-col gap-4">
      <FormErrors
        errors={[
          ["name", "Required"],
          ["url", "Invalid URL"],
        ]}
      />
      <Input
        label="Text input"
        name="demo-text"
        type="text"
        placeholder="placeholder"
        value=""
        onChange={() => undefined}
      />
      <Select
        label="Select"
        name="demo-select"
        value={selectValue}
        options={[
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
        ]}
        onChange={(e) => setSelectValue(e.target.value)}
      />
      <InputCheck
        label="Checkbox"
        description="Optional description"
        name="demo-check"
        checked={checkOn}
        onChange={(e) => setCheckOn(e.target.checked)}
      />
      <InputRating
        label="Rating"
        name="demo-rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <FormActions
        onCancel={() => undefined}
        actionButtonColor="cyan"
      />
    </div>
  );
};
