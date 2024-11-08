package com.crud_spring;

import com.crud_spring.model.Course;
import com.crud_spring.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			for (int i = 0; i < 2; i++) {

				Course c = new Course();
				c.setName("Angular com Spring ");
				c.setCategory("Front-end");
				courseRepository.save(c);
			}
		};
	}

}
