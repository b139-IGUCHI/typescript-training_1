import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/HomePage.css";

function HomePage() {
    return (
        <Layout>
            <div className="homepage">
                <h1>TypeScript 学習教材</h1>
                <p>React × TypeScript の学習用アプリです。</p>

                <div className="card-container">
                    <Link to="/detail" className="card">
                        <h2>📖 Detail Page</h2>
                        <p>詳細ページでオブジェクトやプリミティブを学ぶ</p>
                    </Link>

                    <Link to="/profile" className="card">
                        <h2>👤 Profile</h2>
                        <p>プロフィール情報を編集</p>
                    </Link>

                    <Link to="/settings" className="card">
                        <h2>⚙️ Settings</h2>
                        <p>アプリの設定を変更</p>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;
