package sample;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Group;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.text.Font;
import javafx.scene.text.FontPosture;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
import javafx.stage.Stage;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception{

        Text text1 = new Text();
        text1.setText("Test");
        text1.setX(50);
        text1.setY(50);
        text1.setFont(Font.font("verdana", FontWeight.BOLD, FontPosture.REGULAR, 20));


        Group group1 = new Group(text1);

        Scene scene1 = new Scene(group1, 250, 250);

        primaryStage.setTitle("WebTest");
        primaryStage.setScene(scene1);
        primaryStage.show();
    }


    public static void main(String[] args) {
        launch(args);
    }
}
