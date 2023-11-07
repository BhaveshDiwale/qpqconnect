'use client';

import Select from 'react-select'

import useCountries from '../../../app/hooks/useCountries';
import { Countries } from '../../../dummyData/Countries';

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
        <div style={{ color: "#0A0A0A", fontSize: "10px", marginRight: "8px", marginTop: "3px" }}>
            ▼
        </div>
    );

    return (
        <Select
            placeholder="US"
            options={Countries}
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
                    backgroundColor: "#fff",
                    paddingLeft: "4px"
                }),
                input: (base) => ({
                    ...base,
                    fontSize: "14px",
                    // width: "55px",
                }),
                indicatorSeparator: () => ({
                    width: 0,
                    margin: 0,
                }),
                placeholder: (base) => ({
                    ...base,
                    fontSize: "14px",
                    marginLeft: "1px",
                    marginTop: "1.4px",
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
                singleValue: (base) => ({
                    ...base,
                    width: "55px",
                }),
                // valueContainer: (base) => ({
                //     ...base,
                // }),
                // container: (base) => ({
                //     ...base,
                //     width: "35px",
                //     marginLeft: "10px"
                // })
            }}
        />
    );
}

export default CountrySelect;