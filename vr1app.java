package com.vr1itsolutions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import java.util.HashMap;
import java.util.Map;
@SpringBootApplication
@Controller
public class Vr1ItSolutionsApplication {
   public static void main(String[] args) {
       SpringApplication.run(Vr1ItSolutionsApplication.class, args);
   }
   // Model class as an inner class
   public static class ContactForm {
       private String name;
       private String email;
       private String message;
       // Getters and Setters
       public String getName() {
           return name;
       }
       public void setName(String name) {
           this.name = name;
       }
       public String getEmail() {
           return email;
       }
       public void setEmail(String email) {
           this.email = email;
       }
       public String getMessage() {
           return message;
       }
       public void setMessage(String message) {
           this.message = message;
       }
       @Override
       public String toString() {
           return "ContactForm{" +
                   "name='" + name + '\'' +
                   ", email='" + email + '\'' +
                   ", message='" + message + '\'' +
                   '}';
       }
   }
   // Web controller logic inside the main class
   @GetMapping("/")
   public String home(Model model) {
       model.addAttribute("activeTab", "home");
       return "index"; // Return the view name
   }
   @GetMapping("/services")
   public String services(Model model) {
       model.addAttribute("activeTab", "services");
       return "index"; // Same view for simplicity, just switching content
   }
   @GetMapping("/contact")
   public String contactForm(Model model) {
       model.addAttribute("contactForm", new ContactForm());
       model.addAttribute("activeTab", "contact");
       return "index";
   }
   @PostMapping("/contact")
   public String submitContactForm(@ModelAttribute ContactForm contactForm, Model model) {
       System.out.println("Contact Form Submitted: " + contactForm);
       model.addAttribute("contactForm", new ContactForm()); // Reset form after submission
       model.addAttribute("activeTab", "contact");
       return "index"; // Redirect back to the contact form
   }
}
