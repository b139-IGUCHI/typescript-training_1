import React, { ChangeEvent, useState } from "react";
import "./../styles/DetailPage.css";
import { getAddressFromPostalCode } from "../postalCodeMap";
import { postalCodeMap as baseMap } from "../postalCodeMap"; // postalCodeMap を export しておく

type Person = {
    address: () => string;
};

function DetailPage3Content() {
    const [postalCode, setPostalCode] = useState<string>("1000001");
    const [person, setPerson] = useState<Person>({
        address: () => getAddressFromPostalCode(postalCode)
    });

    const [data, setData] = useState<Record<string, string>>({ ...baseMap });

    const handlePostalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newPostal = e.target.value;
        setPostalCode(newPostal);
        setPerson(prev => ({
            ...prev,
            address: () => getAddressFromPostalCode(newPostal)
        }));
    };

    // 1. 値を取得
    const getValue = () => data["100"];

    // 2. keyを取得
    const getKeys = () => Object.keys(data);

    // 3. 値を追加
    const addValue = () => {
        const newData = { ...data, "999": "仮想市テスト町" };
        setData(newData);
    };

    // 4. 繰り返し取得
    const listEntries = () => Object.entries(data);

    // 5. 値を削除
    const deleteValue = () => {
        const newData = { ...data };
        delete newData["999"];
        setData(newData);
    };

    // 6. マージ
    const mergeData = () => {
        const extra = {
            "200": "神奈川県横浜市",
            "300": "茨城県つくば市"
        };
        const merged = { ...data, ...extra };
        setData(merged);
    };

    return (
        <div className="container">
            <h1 className="page-title">連想配列</h1>

            <section className="card">
                <h2>郵便番号から住所を取得</h2>
                <p><strong>住所:</strong> {person.address()}</p>

                <div className="form">
                    <input
                        type="text"
                        value={postalCode}
                        onChange={handlePostalCodeChange}
                        placeholder="郵便番号 上3桁一致で住所を取得"
                    />
                </div>
            </section>

            <section className="card">
                <h2>1. 値を取得</h2>
                <p>キー "100" の値: {getValue()}</p>
            </section>

            <section className="card">
                <h2>2. keyを取得</h2>
                <p>{getKeys().slice(0, 10).join(", ")} ...</p>
            </section>

            <section className="card">
                <h2>3. 値を追加</h2>
                <button className="btn" onClick={addValue}>追加 (999 → 仮想市テスト町)</button>
            </section>

            <section className="card">
                <h2>4. 繰り返し取得</h2>
                <ul className="list">
                    {listEntries().slice(0, 20).map(([key, value]) => (
                        <li key={key}>{key} : {value}</li>
                    ))}
                </ul>
                <p>（最大20件まで表示）</p>
            </section>

            <section className="card">
                <h2>5. 値を削除</h2>
                <button className="btn" onClick={deleteValue}>キー "999" を削除</button>
            </section>

            <section className="card">
                <h2>6. マージ</h2>
                <button className="btn" onClick={mergeData}>データをマージ (200, 300 追加)</button>
            </section>
        </div>
    );
}

export default DetailPage3Content;
