import java.util.Scanner;
public class App {
   private String activeTab = "home";
   private ContactForm contactForm = new ContactForm();
   public static void main(String[] args) {
       App app = new App();
       app.run();
   }
   public void run() {
       Scanner scanner = new Scanner(System.in);
       while (true) {
           showMenu();
           String input = scanner.nextLine();
           if (input.equalsIgnoreCase("exit")) {
               break;
           } else if (input.equalsIgnoreCase("home")) {
               activeTab = "home";
               showHome();
           } else if (input.equalsIgnoreCase("services")) {
               activeTab = "services";
               showServices();
           } else if (input.equalsIgnoreCase("contact")) {
               activeTab = "contact";
               showContactForm(scanner);
           } else {
               System.out.println("Invalid option. Try again.");
           }
       }
       scanner.close();
   }
   private void showMenu() {
       System.out.println("\nSelect a tab: home, services, contact, or type 'exit' to quit.");
   }
   private void showHome() {
       System.out.println("\nWelcome to VR1 IT Solutions");
       System.out.println("We are a software company that provides innovative solutions to businesses and individuals.");
   }
   private void showServices() {
       System.out.println("\nOur Services:");
       System.out.println("1. Software Development");
       System.out.println("   We develop custom software solutions that meet the needs of our clients.");
       System.out.println("2. IT Consulting");
       System.out.println("   We provide expert IT consulting services to help businesses improve their technology infrastructure.");
   }
   private void showContactForm(Scanner scanner) {
       System.out.println("\nGet in Touch");
       System.out.print("Name: ");
       contactForm.setName(scanner.nextLine());
       System.out.print("Email: ");
       contactForm.setEmail(scanner.nextLine());
       System.out.print("Message: ");
       contactForm.setMessage(scanner.nextLine());
       System.out.println("Contact Form Submitted:");
       System.out.println(contactForm);
       contactForm.clear();
   }
   private class ContactForm {
       private String name;
       private String email;
       private String message;
       public void setName(String name) {
           this.name = name;
       }
       public void setEmail(String email) {
           this.email = email;
       }
       public void setMessage(String message) {
           this.message = message;
       }
       public void clear() {
           this.name = "";
           this.email = "";
           this.message = "";
       }
       @Override
       public String toString() {
           return "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
       }
   }
}
