'use client';

import Select from 'react-select'

import useCountries from '../../../app/hooks/useCountries';

// export type CountrySelectValue = {
//     flag: string;
//     label: string;
//     latlng: number[],
//     region: string;
//     value: string
// }

const CountrySelect = ({
    value,
    onChange
}) => {
    const { getAll } = useCountries();

    const DropdownIndicator = ({ children, ...props }) => (
        <div style={{ color: "#0A0A0A", fontSize: "10px", marginRight: "8px", marginTop: "4px" }}>
            ▼
        </div>
    );

    return (
        <Select
            placeholder="US"
            options={getAll()}
            value={value}
            onChange={(value) => onChange(value)}
            formatOptionLabel={(option) => (
                <div className="items-center">
                    <div style={{ fontSize: "16px" }}>{option.flag}</div>
                </div>
            )}
            components={{
                DropdownIndicator,
            }}
            classNames={{
                control: () => 'border d-flex'
            }}
            styles={{
                control: (base) => ({
                    width: "55px",
                    height: "38px",
                    borderRadius: "4px",
                    backgroundColor: "#fff"
                }),
                input: (base) => ({
                    ...base,
                    fontSize: "14px",
                    width: "50px",
                }),
                indicatorSeparator: () => ({
                    width: 0,
                    margin: 0,
                }),
                placeholder: (base) => ({
                    ...base,
                    fontSize: "18px",
                    marginLeft: "1px",
                    marginTop: "-2px"
                }),
                menu: (base) => ({
                    ...base,
                    width: "200px",
                    fontSize: "18px",
                }),
                indicatorsContainer: () => ({
                    marginTop: "9px",
                    marginLeft: 0,
                }),
                // container: () => ({
                //     // width: "100px"
                // })
            }}
        />
    );
}

export default CountrySelect;