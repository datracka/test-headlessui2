import { Switch } from "https://esm.sh/@headlessui/react@1.6.6?alias=react:preact/compat,react-dom:preact/compat,@types/react:preact/compat&deps=preact@10.10.0";
import { useState } from "preact/hooks";
import { tw } from "twind";

export default function () {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked(!checked);

  return (
    <Switch
      checked={checked}
      onChange={toggleChecked}
      class={tw`${
        checked ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span class={tw`sr-only`}>Enable notifications</span>
      <span
        class={tw`${
          checked ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white`}
      />
    </Switch>
  );
}
