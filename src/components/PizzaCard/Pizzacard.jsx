import { useState } from 'react';
import styles from './Pizzacard.module.css';

function Pizzacard({ image, title, description, prices }) 
{
    const [quantity, setQuantity] = useState(1);
    const [selectedDiameter, setSelectedDiameter] = useState(Object.keys(prices)[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const currentPrice = prices[selectedDiameter] * quantity;

    return (
        <>
            <div className={styles.pizzacard} onClick={openModal}>
                <div className={styles.hitSeason}>Хит сезона</div>
                <img src={image} className={styles.pizzacard_image} alt="Pizza" />
                <h2 className={styles.pizzacard_title}>{title}</h2>
                <p className={styles.pizzacard_description}>{description}</p>
                <div className={styles.pizzacard_price}>от {prices[30]}₽</div>
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={closeModal}>×</button>
                        <img src={image} className={styles.modalImage} />
                        <h2 className={styles.modalTitle}>{title}</h2>
                        <p className={styles.modalDescription}>{description}</p>

                        <div className={styles.modalOptions}>
                            <label>Диаметр:</label>
                            <select
                                value={selectedDiameter}
                                onChange={(e) => setSelectedDiameter(e.target.value)}>
                                {Object.keys(prices).map((d) => (
                                    <option key={d} value={d}>
                                        {d} см
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.modalQuantity}>
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>

                        <div className={styles.modalPrice}>Цена: {currentPrice}₽</div>
                        <button className={styles.addToCart}>Добавить в корзину</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Pizzacard;
