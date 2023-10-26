import React from 'react'

import Select from 'react-select';

export const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

export const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

export const formatGroupLabel = (data) => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

export default function DashboardDropdown({ label, placeholder, value, setValue, data }) {
    return (
        <div className="form-group mb-2 pb-1">
            <label style={labelStyles}>{label}</label>
            <Select
                onChange={(e) => setValue(e?.value)}
                options={data}
                formatGroupLabel={formatGroupLabel}
                placeholder={placeholder}
                defaultValue={value}
                styles={{
                    input: (base) => ({
                        ...base,
                        fontSize: "13px",
                        color: "#000",
                        fontWeight: "600",
                    }),
                    menu: (base) => ({
                        ...base,
                        fontSize: "13px",
                    }),
                    container: (base) => ({
                        ...base,
                        width: "100%",
                        border: "1px solid #E4E7E9",
                        borderRadius: "4px",
                        backgroundColor: "#F9F9FC",
                        fontSize: "13px",
                    }),
                    control: (base) => ({
                        ...base,
                        border: "0px",
                        backgroundColor: "#F9F9FC",
                        height: "24px",
                    }),
                }}
            />
        </div>
    )
}

const labelStyles = {
    fontSize: "13px",
    color: "#777980",
    fontWeight: "600",
}
