export const handleIntegrationMP = async (items) => {
    const preference = {
        items: items.map((item) => ({
            title: item.productName, // Asegúrate de que estés utilizando los nombres correctos
            description: item.description || '', // Proporciona una descripción si está disponible
            picture_url: item.image,
            category_id: item.category || "other", // O la categoría correspondiente
            quantity: item.quantity, // Asegúrate de que esto esté correcto
            currency_id: "COP",
            unit_price: item.discount
                ? parseInt(item.price - item.price * (item.discount * 0.01))
                : parseInt(item.price),
        }))
    };

    try {
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: "POST",
            headers: {
                'Authorization': `Bearer TEST-8121409436343955-103018-e863caa51c11bff9a5dcb9ce482b9547-1949729991`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preference)
        });

        const data = await response.json();
        console.log("Respuesta de MercadoPago:", data); // Verificar respuesta
        return data.init_point;

    } catch (error) {
        console.error("Error en la integración con MercadoPago:", error);
        return null;
    }
}
