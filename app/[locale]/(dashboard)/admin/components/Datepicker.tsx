import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";

const Datepicker = () => {
  return (
    <span className="text-sm text-gray-600">
      <Dropdown inline label="Last 7 days" dismissOnClick={false}>
        <DropdownItem>
          <strong>Sep 16, 2021 - Sep 22, 2021</strong>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Custom...</DropdownItem>
      </Dropdown>
    </span>
  );
};

export default Datepicker;
