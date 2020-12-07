class Category extends React.Component {
    render() {
        return (
            <form>
                <label for="dropdown">What's Your Request?</label>
                <select name="dropdown" id="dropdown">
                    <option value="groceries">Groceries</option>
                    <option value="medicine">Pharmacy</option>
                    <option value="Chores">Chores</option>
                </select>
            </form>
        ) 
    }
}

export default Category;