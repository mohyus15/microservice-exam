
package com.mo.productsserver.configs;

import lombok.Getter;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Getter
@Configuration
public class RabbitConfigForProducts {
    @Value("${rabbitmq.queue.name}")
    public String name;
    @Value("${rabbitmq.exchange.name}")
    public String exchange;
    @Value("${products_routing_key}")
    public String productsRouterKey;

    @Bean
    public Queue productqueue (){
        return new Queue(name);
    }
    @Bean
    public TopicExchange exchange(){
        return new TopicExchange(exchange);
    }
    @Bean
   public Binding binding(){
        return BindingBuilder.bind(productqueue())
                .to(exchange())
                .with(productsRouterKey);
   }
   @Bean
   public MessageConverter converter(){
        return new Jackson2JsonMessageConverter();
   }


}

