import "./../styles/DetailPage.css";
import React from "react";

function DetailPage4Content() {
    //   // Record型 オブジェクトの中にオブジェクトがある例。key: valueの形で表現する。
    // hatsとjacketsがオブジェクトであり、clothesObjectはhatsとjacketsを含むオブジェクトである。
    type clothes= {
        id: number;
        title: string;
        routeName: string;
    }
    const clothesObject:Record<string, clothes> = {
        hats: {
            id: 1,
            title: 'Hats',
            routeName: 'hats'
        },
        jackets: {
            id: 2,
            title: 'Jackets',
            routeName: 'jackets'
        }
    }

    const clothesArray  = [
        [1, 'Hats', 'hats'],
        [2, 'Jackets', 'jackets']
    ]

   //  配列の中にオブジェクトがある例
    const clothesObjectInArray  = [
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

    const hatValues: (string | number)[] = [];
    for (const category in clothesObject) {
        const item = clothesObject[category];
        for (const key in item) {
            const value = item[key as keyof clothes];
            hatValues.push(value);
        }
    }

    const newClothesArray: (string | number)[] = [];
    for (let i = 0; i < clothesArray.length; i++) {
        for (let j = 0; j < clothesArray[i].length; j++) {
            newClothesArray.push(clothesArray[i][j]);
        }
    }

    return (
        <div className="container">
            <h1 className="page-title">オブジェクトと配列</h1>

            <section className="card">
                <h2>オブジェクト内のオブジェクトの値を取得</h2>
                <p><strong>clothesObject.hats.title</strong></p>
                <pre>=
                    {
                        JSON.stringify(clothesObject.hats.title)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>オブジェクト内のオブジェクトを取得</h2>
                <p><strong>clothesObject.hats</strong></p>
                <pre> =
                    {
                        JSON.stringify(clothesObject.hats)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>オブジェクト内のオブジェクトの値を順に取得</h2>
                <p><strong>clothesObject</strong></p>
                <pre>=
                    {
                        JSON.stringify(hatValues)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>配列の0番目の要素（配列）の2番目の要素を取得</h2>
                <p><strong>clothesArray[0][2]</strong></p>
                <pre>=
                    {
                        JSON.stringify(clothesArray[0][2])
                    }
                </pre>
            </section>
            <section className="card">
                <h2>配列の0番目の要素（配列）を取得</h2>
                <p><strong>clothesArray[0]</strong></p>
                <pre>=
                    {
                        JSON.stringify(clothesArray[0])
                    }
                </pre>
            </section>
            <section className="card">
                <h2>配列を取得</h2>
                <p><strong>clothesArray</strong></p>
                <pre>=
                    {
                        JSON.stringify(clothesArray)
                    }
                </pre>
            </section>
            <section className="card">
                <h2>配列の要素を別の配列に格納</h2>
                <p><strong>clothesObject</strong></p>
                <pre>=
                    {
                        JSON.stringify(newClothesArray)
                    }
                </pre>
            </section>
        </div>
    );
}

export default DetailPage4Content;
