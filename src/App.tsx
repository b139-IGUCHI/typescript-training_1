import React, {useState, ChangeEvent} from "react";
import {getAddressFromPostalCode} from "./postalCodeMap";
import "./App.css";

// オブジェクトは、プロパティやメソッドなど複数の値をまとめて1つにした入れ物のこと
// 型定義で「このオブジェクトは何を持っているか」を定義している
type Person = {
    name: string; // プロパティ名: 型
    age: number;
    isMale: boolean;
    address: () => string;
};

function App() {
    // プリミティブ型の例
    // プリミティブ型は、値そのものを保持している
    const [primitiveName, setPrimitiveName] = useState<string>("デフォルト名");
    const [primitiveAge, setPrimitiveAge] = useState<number>(20);
    const [primitiveClickCount, setPrimitiveClickCount] = useState<number>(0);
    const [postalCode, setPostalCode] = useState<string>("1000001");

    // オブジェクト型の例
    // オブジェクトは、プロパティやメソッドなど複数の値をまとめて1つにした入れ物のこと
    // 以下のpersonはname、age、isMale、addressをもつオブジェクト
    // nameとageはプロパティ、addressはメソッド
    const [person, setPerson] = useState<Person>({
        name: "デフォルト名",
        age: 20,
        isMale: true,
        address: () => getAddressFromPostalCode(postalCode)
    });

    // プリミティブ型更新
    const changePrimitive = () => {
        const newCount = primitiveClickCount + 1;
        setPrimitiveClickCount(newCount);
        setPrimitiveName(`デフォルト名${newCount}`);
        setPrimitiveAge(primitiveAge + 1);
    };

    // オブジェクト型更新
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPerson({...person, name: e.target.value});
    };

    const increaseAge = () => {
        setPerson({...person, age: person.age + 1});
    };

    const decreaseAge = () => {
        setPerson({...person, age: person.age - 1});
    };

    const handleGenderToggle = () => {
        setPerson({...person, isMale: !person.isMale});
    };

    // 郵便番号変更
    const handlePostalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newPostal = e.target.value;
        setPostalCode(newPostal);
        setPerson(prev => ({
            ...prev,
            address: () => getAddressFromPostalCode(newPostal)
        }));
    };

    return (
        <div className="container">
            <h1>TypeScript 学習教材</h1>

            {/* プリミティブ型 */}
            <section className="card">
                <h2>プリミティブ型</h2>
                <p><strong>名前:</strong> {primitiveName}</p>
                <p><strong>年齢:</strong> {primitiveAge}</p>
                <button onClick={changePrimitive} className="btn">プリミティブを変更</button>
            </section>

            {/* オブジェクト型 */}
            <section className="card">
                <h2>オブジェクト型</h2>
                <p><strong>名前:</strong> {person.name}</p>
                <p><strong>年齢:</strong> {person.age}</p>
                <p><strong>性別:</strong> {person.isMale ? "男性" : "女性"}</p>
                <p><strong>住所:</strong> {person.address()}</p>

                <div className="form">
                    <input
                        type="text"
                        value={person.name}
                        onChange={handleNameChange}
                        placeholder="名前"
                    />
                    <div className="btn-group">
                        <button onClick={increaseAge} className="btn">年齢を+1</button>
                        <button onClick={decreaseAge} className="btn">年齢を-1</button>
                    </div>
                    <label className="checkbox">
                        <input type="checkbox" checked={person.isMale} onChange={handleGenderToggle}/>
                        性別を切り替え
                    </label>
                    <input
                        type="text"
                        value={postalCode}
                        onChange={handlePostalCodeChange}
                        placeholder="郵便番号 上3桁一致で住所を取得"
                    />
                </div>
            </section>

            {/* JSON 表示 */}
            <section className="card">
                <h2>現在のオブジェクト(JSON)</h2>
                <pre className="json-view">
                    {JSON.stringify(
                        {
                            name: person.name,
                            age: person.age,
                            isMale: person.isMale,
                            address: person.address()
                        },
                        null,
                        2
                    )}
                </pre>
            </section>
        </div>
    );
}

export default App;
