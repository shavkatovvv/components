import React from "react";
import { Banner } from "../../components/banner";
import { Category } from "./components/category";
import { categoryData, itemsData } from "../../data/categoty-data";
import { Items } from "../../components/items/items";
import { Dom } from "../../components/dom/dom";
import { Trend } from "../../components/trend/trend";

export const Home = () => {
    return (
        <div>
            <Banner />
            <div className="box">
                {categoryData.map((item) => {
                    return (
                        <div className="box" key={item.id}>
                            <Category {...item} />
                        </div>
                    );
                })}
            </div>

            <div>
                <h1>
                    больше всего
                    проданныхххххххххххххххххххххххххххххххххххххххххххххххххххххххххх
                </h1>
                <div className="box">
                    {itemsData.map((item) => {
                        return (
                            <div>
                                <Items {...item} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <Dom />

            <div>
                <h1>
                    trenddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </h1>
                <div className="box">
                    {itemsData.map((item) => {
                        return (
                            <div>
                                <Trend {...item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
