const questions = {
    1: {
        id: "1",
        text: "คุณกำลังเดินอยู่ในป่าและเจอสัตว์ป่าขนาดใหญ่กำลังจะเข้าใกล้คุณ คุณจะกระทำอย่างไร?"
    },
    2: {
        id: "2",
        text: "ในการเลือกคู่สมรสหรือคู่รักในชีวิตส่วนตัว คุณให้ความสำคัญกับคุณลักษณะใดของคู่ครอง?"
    },
    3: {
        id: "3",
        text: "คุณต้องการเริ่มต้นธุรกิจของคุณเอง คุณจะเลือกทำอย่างไร?"
    },
    4: {
        id: "4",
        text: "เมื่อคุณต้องการที่จะทำการเปลี่ยนงาน คุณจะค้นหาอาชีพใหม่อย่างไร?"
    },
    5: {
        id: "5",
        text: "คุณกำลังเดินทางไปที่ปลายทางและพบกับการติดขัดทางการจราจรหนัก คุณจะจัดการอย่างไร?"
    },
    6: {
        id: "6",
        text: "เมื่อคุณอยู่ในที่งานและต้องการส่งอีเมล์สำคัญ แต่พบว่าเครือข่ายอินเตอร์เน็ตขัดข้อง คุณจะดำเนินการอย่างไร?"
    },
    7: {
        id: "7",
        text: "เมื่อเกิดข้อผิดพลาดในโปรเจกต์ที่คุณรับผิดชอบ คุณจะแก้ไขอย่างไร?"
    },
    8: {
        id: "8",
        text: "คุณต้องการที่จะเริ่มต้นการเรียนรู้ภาษาใหม่ คุณจะเลือกเรียนอย่างไร?"
    },
    9: {
        id: "9",
        text: "เมื่อคุณต้องการที่จะพัฒนาทักษะใหม่ คุณจะเลือกใช้ออกแบบการเรียนรู้อย่างไร?"
    },
    10: {
        id: "10",
        text: "เมื่อคุณต้องการเพิ่มความคุ้มค่าให้กับการทำงานทีม คุณจะกระทำอย่างไร?"
    },
    11: {
        id: "11",
        text: "เมื่อคุณต้องการเพิ่มพลังให้กับสมาชิกในทีม คุณจะใช้อะไร?"
    },
    12: {
        id: "12",
        text: "เมื่อคุณต้องการแก้ไขข้อขัดแย้งในการทำงาน คุณจะใช้วิธีใด?"
    }
}


const choices = {
    1: {
        1: {
            text: "ให้เห็นว่าคุณเป็นเพื่อนแกะและร้องเสียงเหมือนแกะ",
            value: 1
        },
        2: {
            text: "พยายามทำท่าทางที่ไม่เป็นธรรมชาติเพื่อระงับความกลัวของสัตว์",
            value: 2
        },
        3: {
            text: "วิ่งหนีเข้าป่าที่ใกล้เคียง",
            value: 3
        },
        4: {
            text: "นั่งอยู่นิ่งๆและรอดูพฤติกรรมของสัตว์",
            value: 4
        }
    },
    2: {
        1: {
            text: "ความเชื่อมั่นและความเข้ากันทางอารมณ์",
            value: 1
        },
        2: {
            text: "ความรับผิดชอบและความเข้าใจกัน",
            value: 2
        },
        3: {
            text: "ความรู้สึกของการเชื่อมั่นและความเข้าใจที่สอดคล้องกัน",
            value: 3
        },
        4: {
            text: "ความสามารถในการแก้ไขปัญหาและการทำงานร่วมกัน",
            value: 4
        }
    },
    3: {
        1: {
            text: "หาหัวข้อที่เกี่ยวข้องกับความสามารถและความสนใจของคุณ",
            value: 1
        },
        2: {
            text: "ทำการค้นคว้าและวิเคราะห์ตลาดและความต้องการของลูกค้า",
            value: 2
        },
        3: {
            text: "ติดต่อผู้ที่มีประสบการณ์และคำแนะนำในวงการ",
            value: 3
        },
        4: {
            text: "ทำการวางแผนการเงินและการลงทุนอย่างรอบคอบ",
            value: 4
        }
    },
    4: {
        1: {
            text: "พิจารณาความสนใจและความสามารถที่มีอยู่",
            value: 1
        },
        2: {
            text: "สำรวจตลาดแรงงานและโอกาสทางอาชีพ",
            value: 2
        },
        3: {
            text: "ปรึกษากับคนในวงการและความคิดเห็นจากบุคคลอื่น",
            value: 3
        },
        4: {
            text: "พิจารณาผลกระทบของการเปลี่ยนงานต่อชีวิตส่วนตัวและครอบครัว",
            value: 4
        }
    },
    5: {
        1: {
            text: "ใช้แอปพลิเคชันนำทางเลือกเส้นทางที่เป็นไปได้ที่สุด",
            value: 1
        },
        2: {
            text: "รอให้การจราจรลดลงและเดินทางต่อเมื่อสะดวก",
            value: 2
        },
        3: {
            text: "หาทางเลือกเส้นทางการเดินทางอื่นเพื่อหลีกเลี่ยงการติดขัด",
            value: 3
        },
        4: {
            text: "ทนต่อการติดขัดและเดินทางต่อไปตามเส้นทางปกติ",
            value: 4
        }
    },
    6: {
        1: {
            text: "ลองเชื่อมต่อเครือข่าย Wi-Fi อื่นๆ",
            value: 1
        },
        2: {
            text: "รอให้เครือข่ายกลับมาทำงานอีกครั้งแล้วลองส่ง",
            value: 2
        },
        3: {
            text: "ขอร้องความช่วยเหลือจากผู้ดูแลระบบเครือข่าย",
            value: 3
        },
        4: {
            text: "ใช้โทรศัพท์มือถือเพื่อส่งอีเมล์ผ่านข้อมูลเครือข่ายโทรศัพท์เคลื่อนที่",
            value: 4
        }
    },
    7: {
        1: {
            text: "ติดต่อทีมงานและร่วมกันหาทางแก้ไขปัญหา",
            value: 1
        },
        2: {
            text: "สร้างแผนการป้องกันข้อผิดพลาดในอนาคต",
            value: 2
        },
        3: {
            text: "สร้างรายงานและอธิบายสาเหตุของข้อผิดพลาด",
            value: 3
        },
        4: {
            text: "ติดตามและปรับปรุงกระบวนการทำงานเพื่อป้องกันการเกิดข้อผิดพลาดในอนาคต",
            value: 4
        }
    },
    8: {
        1: {
            text: "ลงทะเบียนเรียนคอร์สออนไลน์ที่มีบทเรียนที่คล้ายกับสไตล์การเรียนของคุณ",
            value: 1
        },
        2: {
            text: "ร่วมกิจกรรมกับชุมชนที่มีผู้ใช้งานภาษาต่างๆ",
            value: 2
        },
        3: {
            text: "จัดตารางเวลาและวางแผนการเรียนอย่างรอบคอบ",
            value: 3
        },
        4: {
            text: "หาครูสอนส่วนตัวที่มีประสบการณ์และทักษะที่เหมาะสม",
            value: 4
        }
    },
    9: {
        1: {
            text: "จัดการศึกษาด้วยตนเองโดยใช้หนังสือและเนื้อหาออนไลน์",
            value: 1
        },
        2: {
            text: "สมัครเรียนคอร์สออนไลน์จากแหล่งการเรียนรู้ที่เชื่อถือได้",
            value: 2
        },
        3: {
            text: "ร่วมกิจกรรมที่เกี่ยวข้องและได้รับความช่วยเหลือจากผู้เชี่ยวชาญ",
            value: 3
        },
        4: {
            text: "สร้างโครงการหรือโมเดลทดลองเพื่อประยุกต์ใช้ทักษะที่ได้เรียนรู้",
            value: 4
        }
    },
    10: {
        1: {
            text: "สร้างโอกาสให้สมาชิกทีมได้แสดงความคิดเห็นและเสนอแนวคิดใหม่ๆ",
            value: 1
        },
        2: {
            text: "จัดทำแผนกิจกรรมสีสันและน่าสนใจสำหรับทีม",
            value: 2
        },
        3: {
            text: "สร้างระบบการสะท้อนกลับและการชำระเงินพิเศษสำหรับสมาชิกทีมที่มีผลงานดี",
            value: 3
        },
        4: {
            text: "จัดอบรมและพัฒนาทักษะของสมาชิกทีมเพื่อเสริมสร้างการทำงานเป็นทีมที่ดีขึ้น",
            value: 4
        }
    },
    11: {
        1: {
            text: "ส่งเครื่องหมายความเคารพและขอบคุณอย่างสม่ำเสมอ",
            value: 1
        },
        2: {
            text: "สร้างสภาพแวดล้อมที่เป็นกันเองและสนับสนุน",
            value: 2
        },
        3: {
            text: "สร้างโอกาสให้สมาชิกมีโอกาสเรียนรู้และพัฒนาทักษะ",
            value: 3
        },
        4: {
            text: "ให้คำปรึกษาและความเข้าใจต่อความต้องการและความสมบูรณ์ของสมาชิกในทีม",
            value: 4
        }
    },
    12: {
        1: {
            text: "ปรึกษากับบุคคลที่มีอำนาจหรือความสำคัญในองค์กร",
            value: 1
        },
        2: {
            text: "พูดคุยโดยตรงกับบุคคลที่มีข้อขัดแย้งเพื่อหาวิธีการแก้ไข",
            value: 2
        },
        3: {
            text: "ใช้กระบวนการสื่อสารที่เปิดเผยและต่อเนื่อง",
            value: 3
        },
        4: {
            text: "ควบคุมอารมณ์และพยายามหาทางที่เป็นมิตรและสร้างสรรค์ในการแก้ไขปัญหา",
            value: 4
        }
    }
}