import React from 'react';


export default function RoleSelect() {
    return (
        <Select
            // defaultValue={colourOptions[1]}
            options={options}
            formatGroupLabel={formatGroupLabel}
        />
    );
}