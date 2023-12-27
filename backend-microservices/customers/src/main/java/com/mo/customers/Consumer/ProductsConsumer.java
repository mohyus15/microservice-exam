package com.mo.customers.Consumer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class ProductsConsumer {
    private static final Logger LOGGER = LoggerFactory.getLogger(ProductsConsumer.class);
    @RabbitListener(queues = "${spring.rabbitmq.template.default-receive-queue}")
    public void Consumer(Object productsRequest){
        LOGGER.info(String.format("new products is received from queue products -> %s", productsRequest.toString()));
    }


}

