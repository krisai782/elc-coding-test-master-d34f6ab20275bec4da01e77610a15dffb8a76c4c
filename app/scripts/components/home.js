/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof Home
     */

    render() {
        let list = this.props.data?.list;
        console.log(list);
        return (
            <section id="home">
                <div className="content">
                    {list && list.map((item) =>
                        (
                            <div key={item._id} className="item">
                                <h2>{item.name}</h2>
                                <img src={item.picture} alt=""/>
                                <div className="price">${item.price}</div>
                                <p>{item.about}</p>
                            </div>
                        )
                    )}
                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;