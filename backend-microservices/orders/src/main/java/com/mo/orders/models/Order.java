package com.mo.orders.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Builder
@Getter
@Data
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Order_t")
public class Order {
    @Id
    @SequenceGenerator(name = "order_id_sequence",
            sequenceName = "order_id_sequence"
    )
    @GeneratedValue(strategy = GenerationType.AUTO,
            generator = "order_id_sequence")
    private Integer id;
   private String OrderNumber;
   private String email;
   @OneToMany(cascade = CascadeType.ALL)
   private List<OrderListItems> orderListItems;
}
