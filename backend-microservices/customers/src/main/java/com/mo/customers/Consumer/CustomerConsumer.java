package com.mo.customers.Consumer;
import com.mo.customers.model.Customer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class CustomerConsumer {
    private static final Logger LOGGER = LoggerFactory.getLogger(CustomerConsumer.class);
    @RabbitListener(queues = "${spring.rabbitmq.template.default-receive-queue}")
    public void consume(Customer productsRequest) {
        LOGGER.info(String.format("new products is received from queue products -> %s", productsRequest.toString()));
    }


}

