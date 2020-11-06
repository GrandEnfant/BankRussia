export const Period = ({type, onChange}) => {

    return (
        <div>
        {(type.type=== 'unic' || type.type === 'standard') ? <label>Выберите период вклада
            <select name={"period"} onChange={onChange}>
                <option value={"1"}> 1</option>
                <option value={"2"}> 2</option>
                <option value={"7"}> 7</option>
                <option value={"14"}> 14</option>
                <option value={"21"}> 21</option>
                <option value={"31"}> 31</option>
                <option value={"91"}> 91</option>
            </select>
        </label> :
        <label>Выберите период вклада
            <select name={"period"} onChange={onChange}>
                <option value={"91"}> 91</option>
                <option value={"121"}> 121</option>
            </select>
        </label>
}
        </div>)
}