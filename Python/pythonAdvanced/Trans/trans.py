from googletrans import Translator # 구글 번역 API를 구현한 파이썬 모듈

translator = Translator()

translation = translator.translate('챗GPT는 신이야...!', dest='en') # dest = '언어 종류'
print(translation.origin, ' -> ', translation.text) # 원래 문장 -> 번역 문장