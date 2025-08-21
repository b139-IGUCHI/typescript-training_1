import "./../styles/DetailPage.css";
import React from "react";

function DetailPage4Content() {
    //   // Record型 オブジェクトと配列の中にオブジェクトと配列がある例。key: valueの形で表現する。
    // hatsとjacketsがオブジェクトであり、categoriesはhatsとjacketsを含むオブジェクトである。
    type clothes= {
        id: number;　// key: value
        title: string;
        routeName: string;
    }
    type hats={
        id: number;　// key: value
        title: string;
        routeName: string;
    }
    const categoriesObject:Record<string, clothes> = {
        hats: {
            id: 1,　// key: value
            title: 'Hats',
            routeName: 'hats'
        },
        jackets: {
            id: 2,
            title: 'Jackets',
            routeName: 'jackets'
        }
    }

    const categoriesArray  = [
        [1, 'Hats', 'hats'],
        [2, 'Jackets', 'jackets']
    ]

    const categoriesObjectInArray  = [
        {
            id: 1,
            title: 'Hats',
            routeName: 'hats',
        },
        {
            id: 2,
            title: 'Jackets',
            routeName: 'jackets',
        }
    ]





    for (const key in categoriesObject) {
            console.log(categoriesObject[key]);
    }

    for (const key in categoriesObject.hats) {
        console.log(categoriesObject.hats[key]);
    }

    return (
        <div className="container">
            <h1 className="page-title">オブジェクトと配列</h1>

            <section className="card">
                <h2>オブジェクト内のオブジェクトの値を取得</h2>
                <p><strong>categoriesObject.hats.title</strong></p>
                <pre>=
                    {
                        JSON.stringify(categoriesObject.hats.title)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>オブジェクト内のオブジェクトを取得</h2>
                <p><strong>categoriesObject.hats</strong></p>
                <pre> =
                    {
                        JSON.stringify(categoriesObject.hats)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>オブジェクト内のオブジェクトの値を順に取得</h2>
                <p><strong>categoriesObject</strong></p>
                <pre>=
                    {
                    //    JSON.stringify(value)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>オブジェクトを取得</h2>
                <p><strong>categoriesObject</strong></p>
                <pre>=
                    {
                        JSON.stringify(categoriesObject)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>オブジェクトを取得</h2>
                <p><strong>categoriesObject</strong></p>
                <pre>=
                    {
                        JSON.stringify(categoriesObject)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>オブジェクトを取得</h2>
                <p><strong>categoriesObject</strong></p>
                <pre>=
                    {
                        JSON.stringify(categoriesObject)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>オブジェクトを取得</h2>
                <p><strong>categoriesObject</strong></p>
                <pre>=
                    {
                        JSON.stringify(categoriesObject)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>配列を取得</h2>
                <p><strong>categoriesObject</strong></p>
                <pre>=
                    {
                        JSON.stringify(categoriesArray)
                    }
                </pre>
            </section>
        </div>
    );
}

export default DetailPage4Content;
