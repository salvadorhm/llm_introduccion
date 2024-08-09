# LLM Introducción

Curso de Introducción al uso de LLM (Large Language Model, por sus siglas en inglés)

## 0. Introducción

### 0.1 ¿Qué es un modelo de LLM?

Son modelos de [aprendizaje profundo](https://aws.amazon.com/es/what-is/deep-learning/) muy grandes que se preentrenan con grandes cantidades de datos. El [transformador](https://aws.amazon.com/es/what-is/transformers-in-artificial-intelligence/) subyacente es un conjunto de [redes neuronales](https://aws.amazon.com/es/what-is/neural-network/) que consta de un codificador y un decodificador con capacidades de autoatención. El codificador y el decodificador extraen significados de una secuencia de texto y comprenden las relaciones entre las palabras y las frases que contiene.

A diferencia de las redes [neuronales recurrentes (RNN)](https://aws.amazon.com/es/what-is/recurrent-neural-network/) anteriores que procesaban las entradas de forma secuencial, los transformadores procesan secuencias enteras en paralelo. Esto permite a los científicos de datos utilizar las GPU para entrenar LLM basados en transformadores, lo que reduce significativamente el tiempo de entrenamiento. [AWS, 2024](https://aws.amazon.com/es/what-is/large-language-model/)

Es un tipo de modelo de inteligencia artificial diseñado para comprender y generar texto de manera similar a cómo lo haría un ser humano

Estos modelos son parte de una rama de la IA conocida como [Procesamiento de Lenguaje Natural (NLP, por sus siglas en inglés)](https://aws.amazon.com/es/what-is/nlp/), y se entrenan con grandes cantidades de texto para aprender **patrones** en el lenguaje.

Estos modelos pueden realizar tareas como el análisis de la lenguaje natural, la generación de lenguaje natural, la traducción y la razonamiento.

Los **LLM** son utilizados en una variedad de aplicaciones, como el chatbots, los traductores lingüísticos y sistemas de información entre otros. ([Microsoft LLM, 2024](https://learn.microsoft.com/es-es/azure/databricks/generative-ai/generative-ai)), ([AWS LLM, 2024](https://aws.amazon.com/es/what-is/large-language-model/)), ([Google LLM, 2024](https://www.cloudskillsboost.google/course_templates/539/video/498105?locale=es))

### 0.2 Características de los LLM

Algunas de las características de los LLM son:

1.	**Tamaño y Complejidad**: Los LLM suelen tener miles de millones de parámetros, lo que les permite capturar una amplia variedad de patrones lingüísticos. Cuantos más parámetros tiene un modelo, generalmente, mayor es su capacidad para entender y generar texto de forma **coherente**.

2.	**Entrenamiento a Gran Escala**: Los LLM se entrenan en grandes volúmenes de texto, como libros, artículos, páginas web y otros tipos de contenido escrito. Durante este proceso de entrenamiento, **el modelo aprende a predecir la siguiente palabra en una secuencia de texto**, lo que le permite generar **texto coherente y con sentido**.

3.	**Capacidad de Generalización**: Debido a su entrenamiento con una amplia variedad de datos, los LLM pueden generalizar y responder a una amplia gama de preguntas y tareas, incluso aquellas para las que no fueron explícitamente entrenados.

4.	**Aplicaciones**: Los LLM se utilizan en una variedad de aplicaciones, incluyendo chatbots, generación automática de texto, traducción de idiomas, análisis de sentimientos, y más. También son la base de modelos conversacionales como GPT (Generative Pre-trained Transformer), del cual ChatGPT, Gemini de Google, Llama de Meta, etc.

### 0.3 Tipos de modelos de LLM

Los modelos de LLM se pueden clasificar de distintas formas, por ejemplo por su arquitectura, propósito y enfoque entre otros, algunos de los tipos más comunes son:

1. **Modelos Basados en Transformadores**: Son un tipo de modelos de inteligencia artificial diseñados para **procesar y generar texto** utilizando una arquitectura llamada **Transformer**. Esta arquitectura ha revolucionado el campo del Procesamiento de Lenguaje Natural (NLP) y es la base de muchos de los modelos más avanzados que existen hoy en día, como GPT, BERT, y T5.

2. **Modelos Autoregresivos**: Son un tipo de modelo en inteligencia artificial y procesamiento de lenguaje natural (NLP) que **generan datos secuenciales**, como texto, de manera paso a paso, **prediciendo cada nuevo dato** (por ejemplo, una palabra) basado en los datos anteriores.

3. **Modelos Multimodales**: Son un tipo de modelo de inteligencia artificial que pueden **procesar y generar** información a partir de **múltiples tipos de datos** o **“modalidades”**, como **texto, imágenes, audio, y video**, combinando estos diferentes tipos de datos para realizar tareas complejas. En el contexto de los Large Language Models (LLM), los modelos multimodales son capaces de entender y generar no solo texto, sino también otros tipos de contenido, integrando diferentes formas de información en un único modelo.
