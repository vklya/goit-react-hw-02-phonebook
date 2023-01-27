const Filter = ({ value, onChange }) => (
    <label>
        Find contacts by name {' '}
        <input type="text" value={value} onChange={onChange}
            style={{
                border: '1px dashed #2f2e33',
                borderRadius: '4px',
                color: '#2f2e33',
                padding: '4px',}} />
    </label>
)

export default Filter;