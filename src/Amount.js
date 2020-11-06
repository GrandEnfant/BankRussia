export const Amount = (period, onChange) => {


const getSum = (period) => {
        switch (period) {
            case '1':
            case '2':
            case '7':
            case '14':
            case '21':
               return <select name={"sum"} onChange={onChange}>
            <option value={"1000000"}> 1млн </option>
            <option value={"100000000"}> 100млн </option>
            <option value={"500000000"}> 500млн </option>
        </select>;
    break;
            case '31':
            case '91':
                return <select name={"sum"} onChange={onChange}>
            <option value={"500000"}> 500тыс </option>
            <option value={"10000000"}> 10млн </option>
            <option value={"50000000"}> 50млн </option>
        </select>;
    break;
            // case '91':
            case '121':
                return <select name={"sum"} onChange={onChange}>
                    <option value={"50000000"}> 50млн </option>
                </select>;
            break;
            default: return <p> Ахахазаазаза лох </p>
    }
}

return(
<>
    {getSum(period.period.period)}
</>
)}
