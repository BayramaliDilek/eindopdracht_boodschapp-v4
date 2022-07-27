import React, {useContext} from "react";

import axios from "axios";
// import {AuthContext} from "../../context/AuthContext";
import {useFormContext} from "react-hook-form";
import {useHistory} from "react-router-dom";
import SaveButton from "../buttons/save-button/SaveButton";
import './Admin_ProductComponent.css'

function Admin_ProductComponent() {

    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "..veld is verplicht";
    const history = useHistory();
    // const {user} = useContext(AuthContext);
    // const token = localStorage.getItem('token');

    async function sendProductData(productdata) {
        try {
            const response = await axios.post(`http://localhost:8080/products/create`,
                {

                    id: productdata.product_id,
                    productName: productdata.product_name,
                    productType: productdata.product_type,
                    description: productdata.product_description,
                    ingredients: productdata.product_ingredients,
                    price: productdata.product_price,
                    quantity: productdata.product_quantity,
                });

            console.log(response.data)
        } catch (error) {

            console.error(error);

        }

    }

    console.log();

    async function onSubmit(productData) {
        try {
            await sendProductData(productData);

            setTimeout(() => {

                history.push(`/producten`)

            }, 500);

        } catch (error) {
            console.error(error);
        }
    }


    return (

        <>


            <div className="Product-Form-Container">


                <div className="admin-product-text">

                    Voor nieuwe producten vult u een nieuwe artikelnummer in.
                    <br/>
                    Voor bestaande producten vult u het bestaande artikelnummer in om een bestaand product te wijzigen.
                    <br/>
                    Voor de prijs gebruikt u i.p.v een 'komma' een 'punt' om decimale getallen in te voeren. bijvoorbeeld: € 2.19


                </div>

                <form className="product-form"
                      onSubmit={handleSubmit(onSubmit)}>


                    <div>


                        <label htmlFor="details-product-id">
                            artikelnummer:
                            <input
                                type="text"
                                id="product_id"
                                {...register("product_id", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="artikelnummer"
                            />
                        </label>
                        {errors.product_id && <p>{errors.product_id.message}</p>}
                        <br/>


                        <label htmlFor="details-product-name">
                            Product-naam:
                            <input
                                type="text"
                                id="product_name"
                                {...register("product_name", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="product-naam"

                            />
                        </label>
                        {errors.product_name && <p>{errors.product_name.message}</p>}
                        <br/>


                        <label htmlFor="product_type">
                            <select
                                id="product_type"
                                {...register("product_type", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="product-soort"
                            >

                                <option value="Fruit">
                                    Fruit
                                </option>
                                <option value="Brood">
                                    Brood
                                </option>
                                <option value="Frisdranken">
                                    Frisdranken
                                </option>
                                <option value="Kaas">
                                    Kaas
                                </option>
                                <option value="Diepvries">
                                    Diepvries
                                </option>
                                <option value="Slagerij">
                                    Slagerij
                                </option>
                                <option value="Zuivel & Eieren">
                                    Zuivel & Eieren
                                </option>

                            </select>
                        </label>
                        {errors.product_type && <p>{errors.product_type.message}</p>}
                        <br/>

                    </div>

                    <div className="product-omschrijving">

                        <label htmlFor="details-product-description">
                            Omschrijving:
                            <textarea
                                type="text"
                                id="product_description"
                                rows="10"
                                cols="50"
                                {...register("product_description", {
                                    required: {value: false, message: message}
                                })}
                                placeholder="Bijvoorbeeld: Frambozen hebben een fluweelzachte en
                                zoete smaak. Het is beter om de frambozen niet te wassen,
                                zo blijft de heerlijke smaak het beste bewaard. Lekker door een
                                fruitsalade of smoothie. "

                            />
                        </label>
                        {errors.product_description && <p>{errors.product_description.message}</p>}
                        <br/>

                        <label htmlFor="details-product-ingredients">
                            Ingredienten:
                            <textarea
                                type="text"
                                rows="10"
                                cols="50"
                                id="product_ingredients"
                                {...register("product_ingredients", {
                                    required: {value: false, message: message}
                                })}
                                placeholder="Bijvoorbeeld: TARWEbloem, roomboter (MELK), water, gist,
                                suiker, EI, zout, TARWEgluten,
                                amylase, hemicellulase, meelverbeteraar (E300)."

                            />
                        </label>
                        {errors.product_ingredients && <p>{errors.product_ingredients.message}</p>}
                        <br/>

                    </div>

                    <div>


                        <label htmlFor="details-product-price">
                            Prijs:
                            <input
                                type="text"
                                id="product_price"
                                {...register("product_price", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="prijs"

                            />
                        </label>
                        {errors.product_price && <p>{errors.product_price.message}</p>}



                        <label htmlFor="details-product-quantity">
                            Voorraad
                            <input
                                type="text"
                                id="product_quantity"
                                {...register("product_quantity", {
                                    required: {value: false, message: message}
                                })}
                                placeholder="voorraad"

                            />
                        </label>
                        {errors.product_quantity && <p>{errors.product_quantity.message}</p>}
                        <br/>


                        <div className="product-form-savebutton">
                            <SaveButton/>


                        </div>

                    </div>




                </form>

            </div>

        </>
    )


}

export default Admin_ProductComponent;