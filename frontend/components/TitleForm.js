
class TitleForm extends React.Component {
    render() {
        return (
            <form>
                <label for="titleText">What's Your Request?</label>
                <input type="text" name="titleText" class="formText"></input>
            </form>
        ) 
    }
}

export default TitleForm;