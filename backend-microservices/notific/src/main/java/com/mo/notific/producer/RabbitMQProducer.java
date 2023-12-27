package com.mo.notific.producer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQProducer {
    private static final Logger LOGGER = LoggerFactory.getLogger(RabbitMQProducer.class);

    @Value("${rabbitmq.exchange.name}")
    private String exchange;
    @Value("${rabbitmq.routing.key}")
    private String routing_key;
    private final RabbitTemplate rabbitTemplate;
    public RabbitMQProducer(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }
    public void publishMessage(
            String message,
            Object payload,
             String exchange,
             String routing_key){
        LOGGER.info(String.format(
                "message sender to rabbitmq from the products -> %s",
                        payload),
                exchange, routing_key, message);
        rabbitTemplate.convertAndSend(exchange, routing_key,payload);

    }
}
