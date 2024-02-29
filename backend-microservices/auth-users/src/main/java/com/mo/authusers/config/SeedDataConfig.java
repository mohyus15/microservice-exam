package com.mo.authusers.config;

import com.mo.authusers.models.Role;
import com.mo.authusers.models.User;
import com.mo.authusers.repositories.UserRepository;
import com.mo.authusers.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class SeedDataConfig implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;


    @Override
    public void run(String... args) {
        if (userRepository.count() == 0) {

            User user1 = User.builder()
                    .firstName("John")
                    .lastName("Doe")
                    .email("john.doe@example.com")
                    .password(passwordEncoder.encode("password123"))
                    .role(Role.ROLE_ADMIN)
                    .build();

            User user2 = User.builder()
                    .firstName("Jane")
                    .lastName("Doe")
                    .email("jane.doe@example.com")
                    .password(passwordEncoder.encode("password456"))
                    .role(Role.ROLE_ADMIN)
                    .build();

            User user3 = User.builder()
                    .firstName("Alice")
                    .lastName("Smith")
                    .email("alice.smith@example.com")
                    .password(passwordEncoder.encode("password789"))
                    .role(Role.ROLE_ADMIN)
                    .build();

            User user4 = User.builder()
                    .firstName("Bob")
                    .lastName("Johnson")
                    .email("bob.johnson@example.com")
                    .password(passwordEncoder.encode("passwordabc"))
                    .role(Role.ROLE_ADMIN)
                    .build();

            userService.save(user1);
            userService.save(user2);
            userService.save(user3);
            userService.save(user4);

            log.debug("Created ADMIN user - {}", user1);
            log.debug("Created ADMIN user - {}", user2);
            log.debug("Created ADMIN user - {}", user3);
            log.debug("Created ADMIN user - {}", user4);

        }
    }
}
