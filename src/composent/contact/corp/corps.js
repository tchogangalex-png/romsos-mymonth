

const Corps = () => {
    return (
        <div>
            <div>
                <p>localisation</p>
                <p>adresse E-mail</p>
                <p>contact</p>
            </div>
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="notre nom" />
                        <input type="text" placeholder="notre nom" />
                    </div>
                    <div>
                        <input type="text" placeholder="notre nom" />
                    </div>
                    <div>
                        <textarea placeholder="Message"></textarea>
                    </div>

                    <div>
                        <input type="submit" value='soummettre' />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Corps