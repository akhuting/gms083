package config;

import cn.hutool.core.io.resource.ClassPathResource;
import com.esotericsoftware.yamlbeans.YamlReader;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.List;


public class YamlConfig {

    public static final YamlConfig config = fromFile("config.yaml");

    public List<WorldConfig> worlds;
    public ServerConfig server;

    public static YamlConfig fromFile(String filename) {
        try {
            ClassPathResource classPathResource = new ClassPathResource(filename);
            YamlReader reader = new YamlReader(classPathResource.getReader(Charset.defaultCharset()));
            YamlConfig config = reader.read(YamlConfig.class);
            reader.close();
            return config;
        } catch (FileNotFoundException e) {
            String message = "Could not read config file " + filename + ": " + e.getMessage();
            throw new RuntimeException(message);
        } catch (IOException e) {
            String message = "Could not successfully parse config file " + filename + ": " + e.getMessage();
            throw new RuntimeException(message);
        }
    }
}
