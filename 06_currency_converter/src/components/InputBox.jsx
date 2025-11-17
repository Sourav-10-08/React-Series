// Importing React and the useId hook.
// useId helps generate a unique ID for form elements.
import React, { useId } from 'react'

// InputBox component receives multiple props from the parent component.
function InputBox({
    label,                 // Label text shown above the input
    amount,                // The numeric amount value
    onAmountChange,        // Callback function when amount changes
    onCurrencyChange,      // Callback function when currency changes
    currencyOptions = [],  // List of currencies to show in the dropdown
    selectCurrency = "usd",// Default selected currency
    amountDisable = false, // Whether the amount input should be disabled
    currencyDisable = false,// Whether currency dropdown should be disabled
    className = "",        // Extra CSS classes if needed
}) {

    // Generates a unique ID for the amount input so the label connects correctly.
    const amountInputId = useId()

    return (
        // Main container with a white background and flex layout.
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            {/* LEFT SIDE: AMOUNT INPUT */}
            <div className="w-1/2">
                {/* Label connected to the input using htmlFor */}
                <label
                    htmlFor={amountInputId}
                    className="text-black/40 mb-2 inline-block"
                >
                    {label}
                </label>

                {/* Amount input box */}
                <input
                    id={amountInputId}   // Connects label to input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} // Disable based on props
                    value={amount}           // Current amount value
                    // When the user types, call onAmountChange if it's provided
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>

            {/* RIGHT SIDE: CURRENCY DROPDOWN */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                {/* Currency selection dropdown */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency} // Currently selected currency
                    // When selection changes, call onCurrencyChange if provided
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable} // Disable if needed
                >
                    {/* Loop through all currency options and show each as <option> */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox; // Exporting the component so other files can use it

/*  Summmary of the code 
This InputBox component shows two things:
An input box where you type an amount
A dropdown list to select a currency
You give this component some values from a parent component such as:
what the label should be
the amount value
the list of currency options
which currency is selected
what should happen when the amount changes
what should happen when the currency changes
The component is divided into two halves:
Left: label + amount input
Right: "Currency Type" + dropdown
When the user types an amount, it calls onAmountChange().
When the user selects a currency, it calls onCurrencyChange().
The useId() hook is used to create a unique ID so the label and input are connected (good for accessibility).
You can reuse this component for both "From" and "To" currency boxes in your currency converter.
 */