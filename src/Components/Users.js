import user1 from '../media/users/avatar.png'
import user2 from '../media/users/avatar (1).png'
import user3 from '../media/users/avatar (2).png'
import user4 from '../media/users/avatar (3).png'

export default function Users(){
    return(
        <section className='users container section'>
            <header className="users_header">
                <h1>Testimonials</h1>
            </header>
            <main className="users_content">
                <div className="users_content_item">
                    <header className="users_content_item_header">
                        <img src={user1}/>
                        <h2>Claire Bell <br/>Designer</h2>
                    </header>
                    <main className="users_content_item_text">
                        <p>
                            Slate helps you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year. Slate helps 
                            you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year.your financial 
                            goal for the month and year.
                        </p>
                    </main>
                </div>
                <div className="users_content_item">
                    <header className="users_content_item_header">
                        <img src={user2}/>
                        <h2>Francisco Lane <br/>Designer</h2>
                    </header>
                    <main className="users_content_item_text">
                        <p>
                            Slate helps you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year. Slate helps 
                            you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year.your financial 
                            goal for the month and year.
                        </p>
                    </main>
                </div>
                <div className="users_content_item">
                    <header className="users_content_item_header">
                        <img src={user3}/>
                        <h2>Ralph Fisher <br/>Designer</h2>
                    </header>
                    <main className="users_content_item_text">
                        <p>
                            Slate helps you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year. Slate helps 
                            you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year.your financial 
                            goal for the month and year.
                        </p>
                    </main>
                </div>
                <div className="users_content_item">
                    <header className="users_content_item_header">
                        <img src={user4}/>
                        <h2>Jorge Murphy <br/>Designer</h2>
                    </header>
                    <main className="users_content_item_text">
                        <p>
                            Slate helps you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year. Slate helps 
                            you see how many more days 
                            you need to work to reach your financial 
                            goal for the month and year.your financial 
                            goal for the month and year.
                        </p>
                    </main>
                </div>
            </main>
        </section>
    )
}