
package com.mo.orders.producer;
import com.mo.orders.models.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQProducer {
    private static final Logger LOGGER = LoggerFactory.getLogger(RabbitMQProducer.class);
    private final RabbitTemplate rabbitTemplate;
    public RabbitMQProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    @Value("${rabbitmq.exchange.name}")
    private String exchange;
    @Value("${rabbitmq.routing.key}")
    private String routing_key;


    public void publishMessage(
            Order payload){
        LOGGER.info(String.format(
                "message sender to rabbitmq from orders -> to from notification %s-------", payload));
        rabbitTemplate.convertAndSend(exchange, routing_key,payload);

    }


}
