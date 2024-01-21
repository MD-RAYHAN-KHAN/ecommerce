/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import "../styles/Homepage.css";
import "../styles/Nannypage.css";

const Blog = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    return (
        <Layout title={"Blog - Family Care"}>
            <section className="container-fluid bg-light bg-nanny py-5 mt-5">
                <div className="container-fluid">
                    <div className="container pt-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="section-title text-center">
                                    <h2 className="fs-h2 letter-spacing">Navigating Healthcare with Family Care</h2>
                                    <div className="divider mx-auto my-4" />
                                    <p className="">"Your Pocket Guide to Better Living"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5">
                    {/* blog first row*/}
                    <div className="row d-flex">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img
                                src="/images/blog/blog-img-smok.png"
                                className="img-fluid"
                                alt="SmokeImage"
                                width={"100%"}
                            />
                            <p className="mt-3">
                                Smoking
                            </p>
                            <span>
                                Smoking: How it became ‘cool’, its effects and implications on mental health
                            </span>
                            <p className="d-flex justify-content-end">
                                <Button variant="primary" className="item_button_two my-3" onClick={handleShow}>
                                    Read More..
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Smoking: How it became ‘cool’, its effects and implications on mental health</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Smoking tobacco has numerous harmful effects on both the individual's health and overall well-being. Here are some of the major consequences of smoking:

                                        Respiratory Issues: Smoking is a leading cause of respiratory problems. It damages the airways and small air sacs in the lungs, leading to conditions such as chronic bronchitis and emphysema. It also increases the risk of lung infections.

                                        Cancer: Smoking is the primary cause of lung cancer, responsible for a significant number of cancer-related deaths worldwide. It also increases the risk of cancers in other organs, including the mouth, throat, esophagus, pancreas, bladder, and cervix.

                                        Cardiovascular Diseases: Smoking is a major contributor to heart diseases and stroke. It can lead to the narrowing and hardening of arteries (atherosclerosis), reducing blood flow and increasing the risk of blood clots.

                                        Addiction: Nicotine, a highly addictive substance present in tobacco, can lead to dependence. This addiction makes it challenging for individuals to quit smoking, even when they are aware of the associated health risks.

                                        Pregnancy Complications: Pregnant women who smoke increase the risk of complications such as preterm birth, low birth weight, and sudden infant death syndrome (SIDS).

                                        Dental Issues: Smoking can cause teeth discoloration, gum disease, and can contribute to tooth loss. It can also lead to bad breath.

                                        Aging of Skin: Smoking accelerates the aging process of the skin, leading to premature wrinkles and a dull complexion. It reduces blood flow to the skin, robbing it of essential nutrients and oxygen.

                                        Secondhand Smoke: Even if someone is not a direct smoker, exposure to secondhand smoke can still pose serious health risks, especially for children and non-smoking adults. Secondhand smoke is associated with respiratory infections, ear problems in children, and an increased risk of heart disease and lung cancer in nonsmokers.

                                        Financial Impact: Smoking is an expensive habit, and the costs associated with purchasing cigarettes over time can have a significant financial impact on individuals and families.

                                        Environmental Impact: The production and disposal of cigarette butts contribute to environmental pollution. Additionally, tobacco cultivation can lead to deforestation and other environmental issues.

                                        It's important for individuals to be aware of these health risks and seek support if they want to quit smoking. Quitting smoking has immediate and long-term health benefits, including reducing the risk of many diseases and improving overall quality of life.</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img
                                src="/images/blog/blog-img-insulin.png"
                                className="img-fluid"
                                alt="SmokeImage"
                                width={"100%"}
                            />
                            <p className="mt-3">
                                Insulin
                            </p>
                            <span>
                                Insulin: What are types, benefits, benefits and ways to administer it?
                            </span>
                            <p className="d-flex justify-content-end">
                                <Button variant="primary" className="item_button_two my-3" onClick={handleShow}>
                                    Read More..
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>What are types, benefits, and ways to administer it?</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Insulin is a hormone produced by the pancreas that plays a crucial role in regulating blood sugar (glucose) levels. It allows cells to take in glucose from the bloodstream to use as energy. When the body doesn't produce enough insulin or doesn't use it effectively, it can lead to diabetes.

                                        Types of Insulin:

                                        Rapid-Acting Insulin: Begins working within 15 minutes, peaks in about 1 hour, and lasts for 2 to 4 hours. Examples include insulin lispro (Humalog), insulin aspart (NovoLog), and insulin glulisine (Apidra).

                                        Short-Acting (Regular) Insulin: Takes about 30 minutes to start working, peaks in 2 to 3 hours, and lasts about 3 to 6 hours. Regular insulin is an example.

                                        Intermediate-Acting Insulin: Takes about 2 to 4 hours to start working, peaks in 4 to 12 hours, and lasts for about 12 to 18 hours. Examples include NPH insulin.

                                        Long-Acting Insulin: Starts working several hours after injection and releases a steady amount of insulin over a more extended period. Examples include insulin glargine (Lantus), insulin detemir (Levemir), and insulin degludec (Tresiba).

                                        Ultra-Long-Acting Insulin: Provides a basal insulin level over an extended period, with a duration of more than 24 hours. Insulin degludec (Tresiba) is an example.

                                        Benefits of Insulin:

                                        Blood Sugar Control: Insulin helps regulate blood sugar levels, preventing hyperglycemia (high blood sugar) and hypoglycemia (low blood sugar).

                                        Energy Production: Allows cells to take in glucose for energy production.

                                        Prevents Ketosis: Insulin prevents the breakdown of fats into ketones, reducing the risk of diabetic ketoacidosis (DKA).

                                        Supports Growth: Insulin plays a role in promoting the growth and repair of tissues.

                                        Ways to Administer Insulin:

                                        Subcutaneous Injection: The most common method involves injecting insulin into the fatty tissue just under the skin using a syringe, insulin pen, or insulin pump.

                                        Insulin Pens: Disposable or reusable pens allow for convenient and accurate dosing. Users dial the desired dose and inject the insulin.

                                        Insulin Pumps: Small devices worn externally that continuously deliver a steady amount of insulin. Users can also administer extra doses as needed.

                                        Inhalable Insulin: Inhaled insulin is available for some individuals who prefer an alternative to injections. However, it may not be suitable for everyone.

                                        Injection Sites: Common subcutaneous injection sites include the abdomen, thighs, and buttocks. Rotating injection sites helps prevent lipodystrophy (changes in fat tissue).

                                        It's crucial for individuals with diabetes to work closely with their healthcare providers to determine the most appropriate type of insulin, dosage, and administration method for their specific needs. Proper education on insulin use, monitoring blood sugar levels, and lifestyle management are essential components of diabetes care.</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img
                                src="/images/blog/blog12.jpg"
                                className="img-fluid mb-4"
                                alt="SmokeImage"
                                width={"100%"}
                            />
                            <p className="mt-3">
                                Medication that can cause water retention
                            </p>
                            <span>
                                Medication that can cause water retention What causes fluid retention?
                            </span>
                            <p className="d-flex justify-content-end">
                                <Button variant="primary" className="item_button_two my-3" onClick={handleShow}>
                                    Read More..
                                </Button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Medication that can cause water retention What causes fluid retention?</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        • Impact of Prostaglandins on renal salt
                                        The human body regulates the water levels by prostaglandins that are hormone-like substances. Renal prostaglandins modulate renal salt and water excretion. Kidneys excrete the excess water in the form of urine to maintain the water level, blood plasma and pH. Disturbance in this system could lead to edema or fluid retention.

                                        • Underlying medical condition
                                        It could be associated with an ongoing medical condition like ischemic heart disease, renal disease, or endocrine disorder like thyroid disease. The failure of cardiac muscles to generate the required cardiac pressure to pump the blood to the entire body may cause alteration in the blood pressure leading to water retention.

                                        • Malfunction of kidneys
                                        Kidneys absorb all essential or filtered substances that can be reused in the bloodstream and excrete all waste in the form of urine by rich renal capillary network and tubular system. Failure of kidney function may lead to retention of unwanted fluids and excess water.

                                        • Elevated intra-capillary pressure
                                        Increased intra-capillary pressure could lead to retention of interstitial fluid that supplies nutrients to the cells and tissues. This can also occur due to damaged capillary walls, causing the interstitial fluid to accumulate in the intercellular spaces of tissues and organs, causing swelling or edema.

                                        • Lymphatic system
                                        The blockage in the lymphatic system can cause a decrease in the lymphatic fluid pressure, which may lead to lymph accumulation within the lymphatic drainage pathway around the tissues and organs, causing swelling. Such scenarios are primarily seen in the lower abdomen, ankles, and limbs area.

                                        • Chronic infection
                                        Prolonged infection or inflammation causes the release of histamine, which causes retention problems.

                                        • Diet
                                        Malnutrition and improper diet can also cause fluid retention. Food high in sodium and magnesium content also leads to retention.

                                        • Lifestyle
                                        Eating large amounts of salt, sitting or standing for prolonged periods can also lead to fluid retention.

                                        • Pregnancy
                                        Some women experience water retention during pregnancy or before their monthly period.</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    );
};

export default Blog;
