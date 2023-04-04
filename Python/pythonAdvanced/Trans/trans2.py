from googletrans import Translator

DELIMITER = '\n'
MAX_BYTE = 1024 * 15 # 15k

def wrap_text(texts):
    """
    번역할 문장들 사이에 \n을 넣어 문장을 합쳐서 요청
    ex) ['멋쟁이사자처럼', '파이팅'] → '멋쟁이사자처럼\n파이팅'
    """
    texts = [text.replace(DELIMITER, '<span class="notranslate">space</span>') for text in texts]
    return DELIMITER.join(texts)

def unwrap_text(wrapped_text):
    """
    번역된 문장들을 다시 \n을 기준으로 자름
    ex) '멋쟁이사자처럼\n파이팅' →  ['멋쟁이사자처럼', '파이팅']
    """
    texts = wrapped_text.split(DELIMITER)
    texts = [text.replace('<span class="notranslate">space</span>', DELIMITER) for text in texts]
    return texts
    
def chunk_text_byte(text, max_byte=MAX_BYTE, delimiter=DELIMITER):
    """
    대량의 번역 문장들을 translate 함수에 요청하게 되면
    API 요청을 여러 번 하게 되어 성능면에서 떨어지게 됨    
    15k까지 글자수 제한이 있으므로 15k씩 잘라서 요청 -> 네트워크 부하 줄일 수 있음
    """
    text = text.encode('utf-8')
    delimiter = delimiter.encode('utf-8')
    words = iter(text.split(delimiter))
    lines, current = [], next(words)

    for word in words:
        if len(current) + 1 + len(word) > max_byte:
            lines.append(current.decode('utf-8'))
            current = word
        else:
            current += delimiter + word
    lines.append(current.decode('utf-8'))
    return lines

translator = Translator()

translation = ''
target_texts = ['The quick brown fox', 'jumps over', 'the lazy dog']
translated_texts = []

for splitted_text in chunk_text_byte(wrap_text(target_texts)):
    translation += translator.translate(text=splitted_text, dest='ko').text

for translated_text in unwrap_text(translation):
    translated_texts.append(translated_text)    
    
print("원문:", target_texts)
print("번역:", translated_texts)

# 원인: 15k까지 텍스트 제한을 하기 때문
# 해결: 리스트 만들어서 번역하려는 문장 넣고, 15k씩 텍스트를 잘라서, API 요청 횟수를 줄임
# 느낀 점: 파이썬의 세계는 놀라워...!

# 파이썬 import 안 될 때: 커맨트 + 쉬프트 + p -> 인터프리터 바꿔보기