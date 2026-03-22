function calculateFinalPayment (
price1,
price2,
price3,
isPremium,
couponDiscount,
couponActive,
balance,
deliveryType) {
    let totalPrice = price1 + price2 + price3

    if (totalPrice <= 300) {
        if (deliveryType === `express`) {
            totalPrice += 50
            
        } else if (deliveryType === `standart`) {
            totalPrice += 20
            
        } else return`Ошибка: неверный тип доставки`
        
    } 

    if (isPremium === true) {
        totalPrice *=0.1
        
    }

    if (couponActive === true) {
        totalPrice = totalPrice * couponDiscount
    }
    if (totalPrice > balance) {
        return`Недостаточно средств`

        
    } 
if (totalPrice <= 150) {
    return`минимальная сумма заказа - 150`
    
} else {
    return`успешно`
}
    
}

/* Напиши функцию 
calculateFinalPayment
, которая принимает следующие параметры:

price1
,
price2
,
price3
— цены трёх товаров 
(числа)


isPremium
— булевое значение, статус клиента (true/false)


couponDiscount
— число от 0 до 1, процент скидки по купону (например,
0.2
— это 20%)


couponActive
— булевое значение, активен ли купон


balance
— число, баланс клиента



deliveryType
— строка, тип доставки:
"standard"
или
"express"

Функция должна:

Посчитать сумму трёх товаров.
Если сумма товаров превышает 300, доставка бесплатная, иначе:
Для
"standard"
доставки добавить 20 к итоговой сумме.
Для
"express"
доставки добавить 50 к итоговой сумме.
Если тип доставки некорректный, вернуть
"Ошибка: неверный тип доставки"

Если клиент — премиум (
isPremium
), применить скидку 10% к итоговой сумме (после доставки).
Если купон активен (
couponActive
), применить дополнительную скидку
couponDiscount
(после премиум-скидки).
Если итоговая сумма после всех скидок превышает баланс клиента, вернуть строку
"Недостаточно средств"

Если сумма после скидок меньше или равна балансу, вернуть итоговую сумму и строку
"Покупка успешна"

Если итоговая сумма после всех скидок меньше 150, добавить к сообщению фразу
"Минимальная сумма заказа — 150" */



let customers = [
    {   
        price1:200,
        price2:200,
        price3:200,
        isPremium:true,
        couponDiscount:0.9,
        couponActive:true,
        balance:5000,
        deliveryType:"express"
    },
    {   
        price1:100,
        price2:100,
        price3:400,
        isPremium:true,
        couponDiscount:0.2,
        couponActive:true,
        balance:5000,
        deliveryType:"express"
    },
    {   
        price1:200,
        price2:200,
        price3:200,
        isPremium:true,
        couponDiscount:0.1,
        couponActive:true,
        balance:4000,
        deliveryType:"standart"
    },
  

]






console.log(calculateFinalPayment(customers))






let klient = {
    price1:1000,
        price2:1000,
        price3:1000,
        isPremium:true,
        couponDiscount:0.9,
        couponActive:true,
        balance:5000,
        deliveryType:"express"
}

calculateFinalPayment(klient)

console.log(calculateFinalPayment(klient))