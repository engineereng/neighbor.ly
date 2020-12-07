

class Description extends React.Component {
    render() {
        const styling = {
            width: '80%',
            height: '100px'
        }
        return (
            <form>
                <label for="titleText">Leave Some Notes For Your Task</label>
                <input type="text" name="titleText" class="formText" style={styling}></input>
            </form>
        ) 
    }
}

export default Description;