import { CheckoutInputProps } from "./types";

export const CheckoutInput: React.FC<CheckoutInputProps> = ({
                                                                name,
                                                                id,
                                                                type,
                                                                placeholder,
                                                                onchange
                                                            }): JSX.Element => {
    const handleChange = (evt: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        onchange(evt)
    }

    return(
        <div className="CheckoutInput">
            <label htmlFor={id}>{name}</label>
            {type === "select" ? (
                <select id={id} onChange={handleChange}>
                    <option>Choose a country</option>
                    <option value="us">United States</option>
                    <option value="can">Canada</option>
                </select>
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            )}
        </div>
    )
}