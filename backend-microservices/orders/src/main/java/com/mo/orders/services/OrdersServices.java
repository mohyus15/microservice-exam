package com.mo.orders.services;
import com.mo.orders.models.Order;
import com.mo.orders.models.OrderListItems;
import com.mo.orders.models.OrderListItemsDto;
import com.mo.orders.models.OrderRequest;
import com.mo.orders.producer.RabbitMQProducer;
import com.mo.orders.repository.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
@Service
public class OrdersServices {
    private final RabbitMQProducer producer;
    private final OrderRepository orderRepository;
    public OrdersServices(RabbitMQProducer producer, OrderRepository orderRepository) {
        this.producer = producer;
        this.orderRepository = orderRepository;
    }
    public void createOrder(OrderRequest orderRequest) {
        Order order= new Order();
        order.setOrderNumber(orderRequest.getOrderNumber());
        order.setEmail(orderRequest.getEmail());
        List<OrderListItems> res = orderRequest.getOrderListItemsDto().stream().map(this::mapToDto).toList();
        order.setOrderListItems(res);
        orderRepository.save(order);

        producer.publishMessage(
               order);


    }

    private OrderListItems mapToDto(OrderListItemsDto dto) {
        OrderListItems orderListItems = new OrderListItems();
        orderListItems.setName(dto.getName());
        orderListItems.setImage(dto.getImage());
        orderListItems.setBrand(dto.getBrand());
        orderListItems.setCategory(dto.getCategory());
        orderListItems.setCountInStock(dto.getCountInStock());
        orderListItems.setDescription(dto.getDescription());
        orderListItems.setPrice(dto.getPrice());
        return  orderListItems;


    }


    @Transactional
    public List<Order> getOrders() {
        List<Order> orders = orderRepository.findAll();

        // Initialize the lazy-loaded collection for each order
        for (Order order : orders) {
            order.getOrderListItems().size();
        }

        return orders;
    }

    public void getOrderById(Integer id) {
        orderRepository.findById(id);

    }

    public void deleteOrders(Integer id) {
        orderRepository.deleteById(id);
    }

}
