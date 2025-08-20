import React, { useState } from "react";
import "./../styles/DetailPage.css";

function DetailPage2Content() {
    // 配列とオブジェクトの対比
    const [array, setArray] = useState<string[]>(["リンゴ", "バナナ", "オレンジ"]);
    const [object, setObject] = useState({ a: 1, b: 2, c: 3 });

    // 連想配列の例（指定の内容）
    const [assocArray, setAssocArray] = useState<{ [key: string]: number }>({
        apple: 10,
        banana: 20,
        orange: 30,
    });

    const addFruit = () => setArray([...array, `新しい果物${array.length + 1}`]);
    const changeObjectB = () => setObject({ ...object, b: object.b + 1 });
    const increaseApple = () => setAssocArray({ ...assocArray, apple: assocArray.apple + 1 });
    const increaseBanana = () => setAssocArray({ ...assocArray, banana: assocArray.banana + 1 });
    const increaseOrange = () => setAssocArray({ ...assocArray, orange: assocArray.orange + 1 });

    return (
        <div className="container">
            <h1 className="page-title">オブジェクトと配列・連想配列</h1>

            <section className="card">
                <h2>配列とオブジェクトの対比</h2>
                <p><strong>配列:</strong> {array.join(", ")}</p>
                <p><strong>オブジェクト:</strong> a={object.a}, b={object.b}, c={object.c}</p>
                <div className="btn-group">
                    <button className="btn" onClick={addFruit}>配列に追加</button>
                    <button className="btn" onClick={changeObjectB}>オブジェクトbを変更</button>
                </div>
            </section>

            <section className="card">
                <h2>連想配列（果物の在庫）</h2>
                <p>{JSON.stringify(assocArray, null, 2)}</p>
                <div className="btn-group">
                    <button className="btn" onClick={increaseApple}>apple +1</button>
                    <button className="btn" onClick={increaseBanana}>banana +1</button>
                    <button className="btn" onClick={increaseOrange}>orange +1</button>
                </div>
            </section>
        </div>
    );
}

export default DetailPage2Content;
