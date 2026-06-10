import os
import sys

def patch_pdfinterp():
    try:
        import pdf2zh.pdfinterp
        original_do_SCN = getattr(pdf2zh.pdfinterp.PDFPageInterpreterEx, 'do_SCN', None)
        if original_do_SCN:
            def patched_do_SCN(self, *args, **kwargs):
                if not hasattr(self, 'scs'):
                    self.scs = None
                if not hasattr(self, 'ncs'):
                    self.ncs = None
                if not hasattr(self, 'cs'):
                    self.cs = getattr(self, 'graphicstate', {}).get('color_space') # fallback
                return original_do_SCN(self, *args, **kwargs)
            pdf2zh.pdfinterp.PDFPageInterpreterEx.do_SCN = patched_do_SCN
    except Exception as e:
        print(f"Failed to patch pdfinterp: {e}")

if __name__ == "__main__":
    patch_pdfinterp()
    import pdf2zh.pdf2zh
    sys.exit(pdf2zh.pdf2zh.main())
